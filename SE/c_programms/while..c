#include <stdio.h>

int main() {
    int num, rev = 0, digit;

    printf("Enter a number: ");
    scanf("%d", &num);

    while (num > 0) {
        digit = num % 10;          // get last digit
        rev = rev * 10 + digit;    // add it to reversed number
        num = num / 10;           // remove last digit
    }

    printf("Reversed number = %d\n", rev);

    return 0;
}
