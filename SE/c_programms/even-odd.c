#include <stdio.h>

int a, eventotal = 0, oddtotal = 0, sumeven = 0, sumodd = 0;
int i = 1;

int main() {
    while (i < 5) {
        printf("Enter the number: ");
        scanf("%d", &a);

        if (a % 2!== 0) {
            printf("The number %d is ODD\n", a);
            eventotal++;
            sumeven = sumeven + a;
        } else {
            printf("The number %d is EVEN\n", a);
            oddtotal++;
            sumodd = sumodd + a;
        }
        i++;
    }

    printf("\nThe total even numbers: %d\n", eventotal);
    printf("The sum of even numbers: %d\n", sumeven);
    printf("The total odd numbers: %d\n", oddtotal);
    printf("The sum of odd numbers: %d\n", sumodd);

    return 0;
}
