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
  selected_Tags:string[];
  submitted:boolean;
  updateTagReq: UpdateTagReq;

  constructor(private router: Router, private tagService: TagService, public sessionService: SessionService, public alertController: AlertController) {
    this.submitted = false;
    this.resultError = false;
    this.resultSuccess = false;
    this.user = this.sessionService.getCurrentUser();
    this.updateTagReq = new UpdateTagReq();
    this.updateTagReq.user = this.user;
    this.selected_Tags = this.sessionService.getCurrentUser().tags.map(x => x.tag_name);
   }

  ngOnInit() {
    this.retrieveAllTags();
    this.user = this.sessionService.getCurrentUser();
  }

ionViewWillEnter() {
  this.retrieveAllTags();
}

  retrieveAllTags() {
    if(this.sessionService.getIsLogin()){
        this.tagService.retrieveAllTags().subscribe(
          response => {
            this.original_Tags = response;
            // this.selected_Tags = response.map(x => x.tag_name);
          },
          error => {
            console.log("error:" + error);
          }
        );
    }
  }

  // searchTag(event:any) {
  //   this.selected_Tags = this.original_Tags;
  //   const val = event.target.value;
    
  //   if(val && val.trim() !=='') {
  //     this.selected_Tags = this.selected_Tags.filter((tag)=>{
  //       return (tag.tag_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

  updateTag(){
    this.submitted = true;
    console.log(this.selected_Tags);
    let tagsToSend = new Array();
    for (var tag of this.selected_Tags) {
      for (var originalTag of this.original_Tags) {
        if (tag === originalTag.tag_name) {
          tagsToSend.push(originalTag);
          break;
        }
      }
    }
    this.updateTagReq.tags = tagsToSend;
    this.updateTagReq.user = this.user;
    this.tagService.updateTag(this.updateTagReq).subscribe(
      response => {
        this.resultSuccess = true;
        this.resultError = false;
        this.message = "Updated tags";
        // this.updateTagReq.user = this.user;
        // this.updateTagReq.tags = this.selected_Tags;
        this.user.tags = tagsToSend;
        this.sessionService.setCurrentUser(this.user);
        console.log(this.user);
        this.router.navigate(["/view-profile"]);
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
