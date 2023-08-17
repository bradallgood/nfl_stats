from pydantic import BaseModel
from datetime import date


# ------------------- Rushing ----------------------------
class RushingBase(BaseModel):
    pass

class Rushing(RushingBase):
    Rk: int
    Game: int
    Yds_Att: float
    TD: int
    First_Dwns: int
    Week: int
    Date: date
    Age: int
    Year: int
    index: int
    Yds: int
    Att: int
    Pkcol: str
    Player: str
    Day: str
    Team: str
    Home_Away: str
    Opp: str
    Result: str
    Pos: str
    Win_Loss: str
    Score: str

    class Config:
        orm_mode = True

class Rushing_name(RushingBase):                   
    Player: str         

    class Config:
        orm_mode = True

class Rushing_player(RushingBase):                   
    Player: str 
    Year: int
    Week: int
    Yds: int
    Att: int 
    TD: int
    Home_Away: str 
    Opp: str

    class Config:
        orm_mode = True



# ------------------- Recieving ----------------------------
class ReceivingBase(BaseModel):
    pass

class Receiving(ReceivingBase):
    Yds_Rec: float
    TD: int
    Ctch_Per: float
    Yds_Tgt: float
    First_Dwns: int
    Week: int
    Date: date
    Age: int
    Year: int
    index: int
    Yds: int
    Tgt: int
    Rk: int
    Game: int
    Rec: int
    Pkcol: str
    Player: str
    Day: str
    Team: str
    Home_Away: str
    Opp: str
    Result: str
    Pos: str
    Win_Loss: str
    Score: str

    class Config:
        orm_mode = True

class Receiving_name(ReceivingBase):                   
    Player: str         

    class Config:
        orm_mode = True

class Receiving_player(ReceivingBase):                   
    Player: str 
    Year: int
    Week: int
    Yds: int
    Rec: int 
    TD: int
    Home_Away: str 
    Opp: str

    class Config:
        orm_mode = True


# ------------------- Passing ----------------------------
class PassingBase(BaseModel):
    pass

class Passing(PassingBase):
    index: int
    Rk: int
    Pick6: int
    TD_Per: float
    Int_Per: float
    Sk: int
    Sk_Per: float
    Yds_Att: float
    Adj_Yds_Att: float
    Adj_Net_Yds_Att: float
    Yds_Per_Comp: float
    Year: int
    Rate: float
    Att: int
    Game: int
    Week: int
    Date: date
    Age: int
    Cmp: int
    Inc: int
    Comp_Per: float
    Yds: int
    TD: int
    Int: int
    Player: str
    Opp: str
    Result: str
    Day: str
    Win_Loss: str
    Score: str
    Pkcol: str
    Pos: str
    Team: str
    Home_Away: str
    
    class Config:
        orm_mode = True


class Passing_name(PassingBase):                   
    Player: str         

    class Config:
        orm_mode = True


class Passing_player(PassingBase):                   
    Player: str 
    Year: int
    Week: int
    Yds: int 
    Cmp: int
    Att: int
    TD: int
    Int: int
    Home_Away: str 
    Opp: str
    Rate: float
    Comp_Per: float       

    class Config:
        orm_mode = True

