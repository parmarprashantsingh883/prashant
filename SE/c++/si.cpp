#include<iostream>
using namespace std;
int  main(){
int ammount,time, si,total;
float rate;

cout<<"enter the ammount"<<endl;
cin>>ammount;
cout<<"enter the time(year):"<<endl;
cin>>time;
cout<<"enter the rate(%) :"<<endl;
cin>>rate;
cout<<"the simple interest is :"<<endl;
cout<<"==========================="<<endl;
si=(ammount*rate*time)/100;
cout<<si<<endl;
cout<<"the toral ammount is :"<<si+ammount;

}
