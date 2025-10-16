#include <iostream>
using namespace std;

class Student {
public:
    int rollno;
    string name;
    string city;

    // Parameterized constructor
    Student(int rollno, string name, string city) {
        this->rollno = rollno;
        this->name = name;
        this->city = city;
    }

    //Default constructor
    Student() {
        cout << "Default constructor called!" << endl;

    }

    void showStudent() {
        cout << rollno << " " << name << " " << city << endl;
    }

    void disp() {
        cout << "disp function called" << endl;
    }
};

int main() {
    // Object with parameterized constructor
    Student s1(101, "Prashant", "Ahmedabad"),s2;

    // Object with default constructor


    s1.disp();
    s1.showStudent();



    return 0;
}
