/*#include <iostream>
using namespace std;

class Car {
public:
    string brand;
    string model;
    int year;

    void display() {
        cout << "Brand: " << brand << ", Model: " << model << ", Year: " << year << endl;
    }
};

int main() {
    Car car1; // object
    car1.brand = "BMW";
    car1.model = "X5";
    car1.year = 2025;
    car1.display();

    return 0;
}
*/
#include<iostream>
using namespace std;
class calc{
public:
    void add(int a,int b){
        cout<<"Addition"<<a+b<<endl;
    }
    void sub(int a,int b){
        cout<<"substraction"<<a-b<<endl;
    }
    void mul(int a,int b){
        cout<<"multiplication"<<a*b<<endl;
    }
    void div(int a,int b){
        cout<<"division"<<a/b<<endl;
    }
};

int main(){
    calc c1;
    c1.add(10,12);
    c1.sub(12,10);
    c1.mul(12,10);
    c1.div(12,6);

    return 0;
}
