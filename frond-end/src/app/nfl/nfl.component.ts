import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nfl',
  templateUrl: './nfl.component.html',
  styleUrls: ['./nfl.component.css']
})

export class NflComponent {

 NflArray : any[] = [];
  currentNflID = "";
  Player_Name: string = "";
  Team: string = "";
  Rushing_Yards: string = "";
  Touchdowns_thrown: string = "";
  Sacks: string = "";
  Field_goal: string = "";
  Catches: string = "";
   

constructor(private http: HttpClient ) 
  {
    this.getAllNfl();
  }
  getAllNfl() {

    this.http.get("http://127.0.0.1:3000/user/getAll").subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.NflArray = resultData.data;
    });
  }
setRefresh(data: any)

 {

  this.http.get("http://127.0.0.1:3000/user/getAll").subscribe((resultData: any)=>
  {
     
      console.log(resultData);
      this.NflArray = resultData.data;
  });
}
  setUpdate(data: any) 
  {
  this.currentNflID = data.id
  this.Player_Name = data.Player_Name;
  this.Team = data.Team;
  this.Rushing_Yards = data.Rushing_Yards;
  this.Touchdowns_thrown = data.Touchdowns_thrown;
  this.Sacks = data.Sacks;
  this.Field_goal = data.Field_goal;
  this.Catches = data.Catches;
  
   }

  UpdateRecords()
  {
    let bodyData = {
      "Id" : this.currentNflID,
      "Player_Name" : this.Player_Name,
      "Team" : this.Team,
      "Rushing_Yards" : this.Rushing_Yards,
      "Touchdowns_thrown" : this.Touchdowns_thrown,
      "Sacks" : this.Sacks,
      "Field_goal" : this.Field_goal,
      "Catches" : this.Catches,
      

    };
    
    this.http.patch("http://127.0.0.1:3000/user/update"+ "/" +this.currentNflID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Player Updateddd")
        this.getAllNfl();
      
    });
  }
  //getAllNfl() {
    //throw new Error('Method not implemented.');
 //}
  
  setDelete(data: any) {
    this.http.delete("http://127.0.0.1:3000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Player Deletedddd")
        this.getAllNfl();
   
    });
    }
    
  save()
  {
    if(this.currentNflID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }

register()
  {

    let bodyData = {
      
      "Player_Name" : this.Player_Name,
      "Team" : this.Team,
      "Rushing_Yards" : this.Rushing_Yards,
      "Touchdowns_thrown" : this.Touchdowns_thrown,
      "Sacks" : this.Sacks,
      "Field_goal" : this.Field_goal,
      "Catches" : this.Catches
  };
    this.http.post("http://127.0.0.1:3000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Player Registered Successfully")
         this.getAllNfl();
        this.Player_Name = '';
        this.Team = '';
        this.Rushing_Yards  = '';
        this.Touchdowns_thrown  = '';
        this.Sacks = '';
        this.Field_goal = '';
        this.Catches = '';
        this.getAllNfl();
    });
  }
}