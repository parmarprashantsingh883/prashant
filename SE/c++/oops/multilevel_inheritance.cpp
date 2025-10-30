#include<iostream>
using namespace std;
class A{
    public:
void mess(){
cout<<"this is a classs:"<<endl;
}


};
class B:public A{
    public:
void mess1(){
cout<<"this is Bclasss:"<<endl;
}


};
class C:public B{
    public:
void mess2(){
cout<<"this is C classs:"<<endl;
}


};
int main(){
C obj;
obj.mess();
obj.mess1();
obj.mess2();
return 0;

}
