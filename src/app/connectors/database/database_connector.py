import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import NullPool
from urllib import parse


DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_SCHEME = os.getenv('DB_SCHEME')

DATABASE_URL = f"mysql+pymysql://{DB_USER}:{parse.quote_plus(DB_PASSWORD)}@{DB_HOST}:{DB_PORT}/{DB_SCHEME}"
#DATABASE_URL = f"mysql+pymysql://{DB_USER}:{parse.quote_plus(1234)}@{'root'}:{3306}/{'tosel_practice'}"

SQLALCHEMY_ENGINE_OPTIONS = {
        "pool_pre_ping": True,
        "pool_recycle": 500,
        "pool_size" : 5,
        "max_overflow" : 20,
        "echo" : False,
        "echo_pool" : True
    }
engine = create_engine(
    DATABASE_URL, **SQLALCHEMY_ENGINE_OPTIONS
)

Session = sessionmaker(bind=engine)  # , autocommit=True, autoflush=True)
db_session = Session()

base = declarative_base()
def get_by(cls, session=db_session, one=True, **params):
    try:
        init = session.query(cls)
        for key, value in params.items():
            init = init.filter(getattr(cls, key) == value)
        if one:
            obj = init.one()
            return obj
        else:
            objs = init.all()
            return objs
    except Exception as e:
        print(e)
    return None

def as_dict(self):
    return {c.name: getattr(self, c.name) for c in self.__table__.columns}

def setter(self, **params):
    for key, value in params.items():
        setattr(self, key, value)

def is_duplicated(cls, session=db_session, **params):
    init = session.query(cls)
    for key, value in params.items():
        init = init.filter(getattr(cls, key) == value)
    objs = init.all()
    if len(objs) == 0:
        return False

    return True

base.get_by = classmethod(get_by)
base.is_duplicated = classmethod(is_duplicated)
base.as_dict = as_dict
base.__init__ = setter


