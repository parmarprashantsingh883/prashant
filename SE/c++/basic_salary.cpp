#include <iostream>
using namespace std;

int main() {
    double basic_salary, hra, da, gross_salary, tax;

    cout << "Enter your basic salary: ";
    cin >> basic_salary;

    hra = basic_salary * 0.40;  // 40% of Basic
    da = basic_salary * 0.10;   // 10% of Basic
    tax = (basic_salary + hra + da) * 0.10; // 10% of Gross before tax

    gross_salary = basic_salary + hra + da - tax;

    cout << "===== Salary Details =====" << endl;
    cout << "Basic Salary : " << basic_salary << endl;
    cout << "HRA          : " << hra << endl;
    cout << "DA           : " << da << endl;
    cout << "Tax (10%)    : " << tax << endl;
    cout << "---------------------------" << endl;
    cout << "Gross Salary : " << gross_salary << endl;

    return 0;
}
