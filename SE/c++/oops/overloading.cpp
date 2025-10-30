#include<iostream>
using namespace std;
class addition{
    public:
void add(int a,int b){
cout<<"sum is:"<<a+b<<endl;
}

void add(int a,int b, int c){
cout<<"sum is:"<<a+b+c<<endl;
}

void add(int a,int b, int c ,int d){
cout<<"sum is:"<<a+b+c+d<<endl;
}};

int main(){

addition a;
a.add(10,20,30);
a.add(20,100);
return 0;
}

