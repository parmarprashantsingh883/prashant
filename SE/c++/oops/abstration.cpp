#include<iostream>
using namespace std;
class base{
public:
    virtual void roi()=0;
};
class icici:public base{
public:
    void roi(){
    cout<<"icici is giving the 5% interest"<<endl;
    }
};
class sbi:public base{
public:
void roi(){
    cout<<"sbi is giving the 10% interest"<<endl;
    }
};
 int main(){
icici user1;
user1.roi();
sbi user2;
user2.roi();

 return 0;
}
