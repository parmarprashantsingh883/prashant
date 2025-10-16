#include<iostream>
using namespace std;
class employee
{
public:

    int id;
    string name;
    int salary;
    void userinput( )
    {

        cout<<"enter the id"<<endl;
        cin>>id;
        cout<<"enter your name:";
        cin>>name;
        cout<<"enter your salary:"<<endl;
        cin>>salary;
    }

    void basic()
    {
        float hra = salary * 0.40;        // 40% of basic
        float da = salary * 0.10;         // 10% of basic
        float gross_salary = salary + hra + da;
        float tax = gross_salary * 0.10;  // 10% tax
        float net_salary = gross_salary - tax;

        gross_salary = (salary + hra + da) ;
        cout << "\n---- Salary Details ----" << endl;
        cout << "ID: " << id << endl;
        cout << "Name: " << name << endl;
        cout << "Basic Salary: " << salary << endl;
        cout << "HRA (40%): " << hra << endl;
        cout << "DA (10%): " << da << endl;
        cout << "Gross Salary: " << gross_salary << endl;
        cout << "Tax (10%): " << tax << endl;
        cout << "Net Salary: " << net_salary << endl;
        cout << "------------------------" << endl;;
    }
};
int main()
{
    employee emp;
    emp.userinput();
    emp.basic();
    return 0;

}
