from sqlalchemy.orm import Session
from sqlalchemy import select
from sqlalchemy.sql import func, select
from sqlalchemy import and_

import models, schemas

# -------------------- Rushing -----------------------------
def get_rushing(db: Session, skip: int = 0, limit: int = 100):
    rushing_table = models.Receiving.__table__
    stmt = select(rushing_table)
    print(stmt) 
    for user in db.execute(stmt).fetchall():
        print(user)
    return db.execute(stmt).fetchall()

def get_rushing_distinctName(db: Session, skip: int = 0, limit: int = 100):
    stmt = select(models.Rushing.Player).distinct()
    return db.execute(stmt).all()

def get_rushing_distinctName_var( db: Session, player_name: str):
    print(f'Player name is {player_name}')    
    stmt = select(models.Rushing.Player, models.Rushing.Year, models.Rushing.Week, models.Rushing.Att,
                  models.Rushing.Yds, models.Rushing.TD, models.Rushing.Home_Away, models.Rushing.Opp
                ).where(models.Rushing.Player == player_name).order_by(models.Rushing.Year, models.Rushing.Week)
    #print(stmt) 
    #for user in db.execute(stmt).fetchall():
    #    print(user)
    return db.execute(stmt).fetchall()

# -------------------- Receiving -----------------------------
def get_receiving(db: Session, skip: int = 0, limit: int = 100):
    receiving_table = models.Receiving.__table__
    stmt = select(receiving_table)
    print(stmt) 
    for user in db.execute(stmt).fetchall():
        print(user)
    return db.execute(stmt).fetchall()

def get_receiving_distinctName(db: Session, skip: int = 0, limit: int = 100):
    stmt = select(models.Receiving.Player).distinct()
    return db.execute(stmt).all()

def get_receiving_distinctName_var( db: Session, player_name: str):
    print(f'Player name is {player_name}')    
    stmt = select(models.Receiving.Player, models.Receiving.Year, models.Receiving.Week, models.Receiving.Rec,
                  models.Receiving.Yds, models.Receiving.TD, models.Receiving.Home_Away, models.Receiving.Opp
                ).where(models.Receiving.Player == player_name).order_by(models.Receiving.Year,models.Receiving.Week)
    #print(stmt) 
    #for user in db.execute(stmt).fetchall():
    #    print(user)
    return db.execute(stmt).fetchall()

# -------------------- Passing -----------------------------
def get_passing(db: Session, skip: int = 0, limit: int = 100):
    passing_table = models.Passing.__table__
    stmt = select(passing_table)
    return db.execute(stmt).fetchall()

def get_distinctName(db: Session, skip: int = 0, limit: int = 100):
    stmt = select(models.Passing.Player).distinct()
    return db.execute(stmt).all()

def get_distinctName_var( db: Session, player_name: str):
    print(f'Player name is {player_name}')    
    stmt = select(models.Passing.Player, models.Passing.Year, models.Passing.Week, models.Passing.Yds, models.Passing.Cmp,
                  models.Passing.Att, models.Passing.TD, models.Passing.Int,models.Passing.Home_Away, models.Passing.Opp,
                  models.Passing.Rate, models.Passing.Comp_Per,
                ).where(models.Passing.Player == player_name).order_by(models.Passing.Year,models.Passing.Week)
    #print(stmt) 
    #for user in db.execute(stmt).fetchall():
    #    print(user)
    return db.execute(stmt).fetchall()



def get_fantasy_pos( db: Session, position: str):

    filter_condition = and_(models.Fantasy.Pos == position, models.Fantasy.FantPt.isnot(None))

    # Create the SQLAlchemy select statement
    stmt = (
        select(
            models.Fantasy.Pos,
            models.Fantasy.Player,
            func.sum(models.Fantasy.FantPt).label("Points")
        )
        .where(filter_condition)
        .group_by(models.Fantasy.Pos, models.Fantasy.Player)
        .order_by(func.sum(models.Fantasy.FantPt).desc())
    )
    print(stmt) 
    for user in db.execute(stmt).all():
        print(user)

    return db.execute(stmt).all()

def get_fantasy_pos_limit( db: Session, position: str, limit: int):

    filter_condition = and_(models.Fantasy.Pos == position, models.Fantasy.FantPt.isnot(None))

    # Create the SQLAlchemy select statement
    stmt = (
        select(
            models.Fantasy.Pos,
            models.Fantasy.Player,
            func.sum(models.Fantasy.FantPt).label("Points")
        )
        .where(filter_condition)
        .group_by(models.Fantasy.Pos, models.Fantasy.Player)
        .order_by(func.sum(models.Fantasy.FantPt).desc()).limit(limit)
    )
    print(stmt) 
    for user in db.execute(stmt).all():
        print(user)

    return db.execute(stmt).all()
