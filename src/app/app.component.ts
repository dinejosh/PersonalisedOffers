import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAccount:any;
  Account_Id:String;
  trans1:any;
  isBenif:any;
  token_id:String;
  notoken:boolean;
  title = 'PersonalisedOffersanddeals';
  jasonHeadr={ 
    'Content-Type': 'application/json',
    'x-fapi-customer-ip-address':'10.23.143.98',
    'x-fapi-customer-last-logged-time':'Sun, 10 Sep 2017 19:43:31 UTC',
    'x-fapi-interaction-id':'2c96efd2-6566-490a-81d7-24dd51340196',
    'x-fapi-financial-id': 'OB/2017/001',
    'Authorization':''
                                }
                                
  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.notoken=true;
  }
  setToken(){
    this.notoken=false
    this.token_id='bearer '+this.token_id
    this.jasonHeadr.Authorization=''+this.token_id
  }

  checkBal(){
    
    let headers=new HttpHeaders(this.jasonHeadr);
    //headers=headers.set('Authorization',''+this.token_id)
    console.log(headers)
    let obs=this.http.get('https://api.hsbc.qa.xlabs.one/invais/open-banking/v1.1/accounts/'+this.Account_Id+'/balances',{headers});
    obs.subscribe((response)=>  
    {
      this.isAccount=response;
      console.log(response);
    })
    }

    trans(){
      let headers=new HttpHeaders(this.jasonHeadr); 
  //    headers=headers.set('Authorization',''+this.token_id)
        let obs=this.http.get('https://api.hsbc.qa.xlabs.one/invais/open-banking/v1.1/accounts/'+this.Account_Id+'/transactions',{headers});
        obs.subscribe((response)=>  
        {
          this.trans1=response;
          console.log(this.trans1);
        })

    }

    showBenificiaryData(){
      let headers=new HttpHeaders(this.jasonHeadr); 
 //     headers=headers.set('Authorization',''+this.token_id)
        let obs=this.http.get('https://api.hsbc.qa.xlabs.one/invais/open-banking/v1.1/accounts/'+this.Account_Id+'/beneficiaries',{headers});
        obs.subscribe((response)=>  
        {
          this.isBenif=response;
          console.log(this.isBenif);
        })

    }

}
