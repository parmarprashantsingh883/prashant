#include<iostream>
using namespace std;
class RBI{
    public:
 void rateofinterest(){
 cout<<"RBI"<<endl;

 }

};
class SBI:public RBI{
public:
    void rateofinterest(){
 cout<<"SBI"<<endl;
 }
};
int main(){

SBI obj;
obj.rateofinterest();

}
