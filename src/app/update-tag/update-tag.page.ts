import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { TagService } from '../services/tag.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Tag } from '../models/tag';
import { UpdateTagReq } from '../models/update-tag-req';



@Component({
  selector: 'app-update-tag',
  templateUrl: './update-tag.page.html',
  styleUrls: ['./update-tag.page.scss'],
})
export class UpdateTagPage implements OnInit {
  user : User;
  resultSuccess : boolean;
  resultError : boolean;
  message : string;
  original_Tags:Tag[];
  selected_Tags:Tag[];
  submitted:boolean;
  updateTagReq: UpdateTagReq;

  constructor(private router: Router, private tagService: TagService, public sessionService: SessionService, public alertController: AlertController) {
    this.submitted = false;
    this.resultError = false;
    this.resultSuccess = false;
    this.user = this.sessionService.getCurrentUser();
    this.updateTagReq = new UpdateTagReq();
    this.updateTagReq.user = this.user;
   }

  ngOnInit() {
    this.retrieveAllTags();
    this.selected_Tags=new Array();
    this.user = this.sessionService.getCurrentUser();
  }
  retrieveAllTags() {
    if(this.sessionService.getIsLogin()){
        this.tagService.retrieveAllTags().subscribe(
          response => {
            this.original_Tags = response;
            this.selected_Tags = response;
          },
          error => {
            console.log("error:" + error);
          }
        );
    }
  }

  searchTag(event:any) {
    this.selected_Tags = this.original_Tags;
    const val = event.target.value;
    
    if(val && val.trim() !=='') {
      this.selected_Tags = this.selected_Tags.filter((tag)=>{
        return (tag.tag_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  updateTag(){
    this.submitted = true;
    this.tagService.updateTag(this.updateTagReq).subscribe(
      response => {
        this.resultSuccess = true;
        this.resultError = false;
        this.message = "Updated tags";
        this.updateTagReq.user = this.user;
        this.updateTagReq.tags = this.selected_Tags;
        this.sessionService.setCurrentUser(this.user);
        console.log(this.user);
        this.router.navigate(["/view-profile"])
      },
      error => {
        this.resultError = true;
        this.resultSuccess = false;
        this.message = "An error has occured while updating the tag: " + error;
        console.log("****** UpdateTagComponent.ts: " + error);
      }
    )
  }
  
 
  back(){
    this.router.navigate(["/view-profile"]);
  }
}
