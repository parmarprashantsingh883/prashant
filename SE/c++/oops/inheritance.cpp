#include<iostream>
using namespace std;
class parents{
    public:
void mess(){
cout<<"prashnat is parents of jay"<<endl;
}

};
class child: public parents{
    public:
void mess2(){
cout<<" jay the child of prashant"<<endl;
}
};
int main(){

child c;
c.mess();
c.mess2();





return 0;
}
