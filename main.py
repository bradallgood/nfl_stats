from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import crud
import models
import schemas

from database import SessionLocal, engine

from fastapi.staticfiles import StaticFiles

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


app.mount("/static", StaticFiles(directory="static"), name="static")


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


#@app.post("/users/", response_model=schemas.User)
#def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
#    db_user = crud.get_user_by_email(db, email=user.email)
#    if db_user:
#        raise HTTPException(status_code=400, detail="Email already registered")
#    return crud.create_user(db=db, user=user)

@app.get("/")
async def root():
    return {"message": "Hello World"}

# -------------------- Passing -----------------------------
@app.get("/passing/", response_model=list[schemas.Passing])
def read_passing(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    passing = crud.get_passing(db, skip=skip, limit=limit)
    return passing

@app.get("/distinct_name/", response_model=list[schemas.Passing_name])
def get_distinct_name(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    passing = crud.get_distinctName(db, skip=skip, limit=limit)
    return passing

@app.get("/distinct_name_var/{player_name}", response_model=list[schemas.Passing_player])
def get_distinct_name(player_name: str, db: Session = Depends(get_db)):
    print(f'In main.py player_name is: |{player_name}|')
    passing = crud.get_distinctName_var(db,  player_name = player_name)
    return passing

# -------------------- Receiving -----------------------------
@app.get("/receiving/", response_model=list[schemas.Receiving])
def read_receiving(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    receiving = crud.get_receiving(db, skip=skip, limit=limit)
    return receiving

@app.get("/receiving_distinct_name/", response_model=list[schemas.Receiving_name])
def get_receiving_distinct_name(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    receiving = crud.get_receiving_distinctName(db, skip=skip, limit=limit)
    return receiving

@app.get("/receiving_distinct_name_var/{player_name}", response_model=list[schemas.Receiving_player])
def get_receiver_distinct_name(player_name: str, db: Session = Depends(get_db)):
    print(f'In main.py rec_player_name is: |{player_name}|')
    receiving = crud.get_receiving_distinctName_var(db,  player_name = player_name)
    return receiving


# -------------------- rushing -----------------------------
@app.get("/rushing/", response_model=list[schemas.Rushing])
def read_rushing(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    rushing = crud.get_rushing(db, skip=skip, limit=limit)
    return rushing

@app.get("/rushing_distinct_name/", response_model=list[schemas.Rushing_name])
def get_rushing_distinct_name(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    rushing = crud.get_rushing_distinctName(db, skip=skip, limit=limit)
    return rushing

@app.get("/rushing_distinct_name_var/{player_name}", response_model=list[schemas.Rushing_player])
def get_rusher_distinct_name(player_name: str, db: Session = Depends(get_db)):
    print(f'In main.py rec_player_name is: |{player_name}|')
    rushing = crud.get_rushing_distinctName_var(db,  player_name = player_name)
    return rushing