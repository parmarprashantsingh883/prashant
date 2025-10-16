#include <iostream>
using namespace std;

/*class Employee {
private:
    int salary;  // private data — hidden from outside

public:
    // Setter function — to set data safely
    void setSalary(int s) {
        if (s > 0)
            salary = s;
        else
            cout << "Invalid salary!" << endl;
    }

    // Getter function — to read data safely
    int getSalary() {
        return salary;
    }
};

int main() {
    Employee emp;

    emp.setSalary(50000);             // set data using function
    cout << "Employee salary: " << emp.getSalary();  // get data safely

    return 0;
}*/
class student{

int rollno;
string name;
string city;


public:
    void setRollno( int rollno){
    this->rollno=rollno;
    }
     void setName( string name){
    this->name=name;
     }

    int getRollno(){
    return rollno;
    }
    string getName(){
    return name;
    }
};
int main(){
student s1;
s1.setRollno(101);
cout<<s1.getRollno()<<endl;
s1.setName("prashnat");
cout<<s1.getName();

return 0;


}
