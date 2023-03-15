import { showfilter } from './../animation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})
export class UserHomeService {

  constructor(private http :HttpClient) { }

  addquestion(body:string,user_id:string,subtrack_id:string){
  return  this.http.post('http://127.0.0.1:8000/api/questions/store',{'question_body':body , 'user_id':user_id , 'subtrack_id':subtrack_id});
  }

  addnewqcomment(body:string ,user_id:string,question_id:number){
    return  this.http.post('http://127.0.0.1:8000/api/qcomments',{'qcomment_body':body,'instructor_id':user_id,'question_id':question_id});
  }

  addnewreply(body:string ,user_id:string,qcomment_id:number){
    return  this.http.post('http://127.0.0.1:8000/api/replies/store',{'reply_body':body,'user_id':user_id,'qcomment_id':qcomment_id});
  }

  updatequestionbyid(id:string,body:string,subtrack_id:string){
    return  this.http.put('http://127.0.0.1:8000/api/questions/update/'+id,{'question_body':body,'subtrack_id':subtrack_id});
  }

  updateqcommentbyid(id:string,body:string){
    return  this.http.put('http://127.0.0.1:8000/api/qcomments/'+id,{'qcomment_body':body ,});
    }

  updatereplybyid(id:string,body:string){
    return  this.http.put('http://127.0.0.1:8000/api/replies/update/'+id,{'reply_body':body ,});
    }

    deletequestionbyid(question_id:string){
      return this.http.delete('http://127.0.0.1:8000/api/questions/delete/'+question_id);
     }

     deleteqcommentbyid(qcommetn_id:string){
      return this.http.delete('http://127.0.0.1:8000/api/qcomments/'+qcommetn_id);
     }

     deletereplybyid(reply_id:string){
      return this.http.delete('http://127.0.0.1:8000/api/replies/delete/'+reply_id);
     }

  showquestion(){
    return  this.http.get('http://127.0.0.1:8000/api/questions');
  }
  
  showfristquestion(){
    return  this.http.get('http://127.0.0.1:8000/api/questions/fristquestion');
  }

  showtenfristquestion(){
    return  this.http.get('http://127.0.0.1:8000/api/questions/tenfristquestion');
  }

  showfilter(subtrack:string){
    return  this.http.get('http://127.0.0.1:8000/api/filterquestions/'+subtrack);
  }
  
  showfristfilter(subtrack:number){
    return  this.http.get('http://127.0.0.1:8000/api/filterquestions/fristquestion'+subtrack);
  }

  showtenfristfilter(subtrack:number){
    return  this.http.get('http://127.0.0.1:8000/api/filterquestions/tenfristquestion'+subtrack);
  }


  showcomment(){
    return  this.http.get('http://127.0.0.1:8000/api/qcomments');
  }


  showreply(){
    return  this.http.get('http://127.0.0.1:8000/api/replies');
  }


  showsubtrack(){
    return  this.http.get('http://127.0.0.1:8000/api/subtracks');
  }
}
