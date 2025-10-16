#include <iostream>
using namespace std;

int main() {
    int amount;
    int currency[] = {2000, 500, 200, 100, 50, 20, 10, 5, 2, 1};
    int num []

    cout << "Enter the amount: ";
    cin >> amount;

    cout << "Currency notes distribution:\n";

    int n = sizeof(currency)/sizeof(currency[0]);

    for (int i = 0; i <num; i++) {
        int notes = amount / currency[i];
        if (notes != 0) {
            cout << currency[i] << " : " << notes << endl;
            amount = amount % currency[i];
        }
    }

    return 0;
}
