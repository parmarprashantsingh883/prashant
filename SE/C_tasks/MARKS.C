
#include <stdio.h>

  int main() {
    int english, maths, hindi, total;
    float per;

    printf("Check your result:\n\n");

    printf("Enter the marks of English: ");
    scanf("%d", &english);

    printf("Enter the marks of Maths: ");
    scanf("%d", &maths);

    printf("Enter the marks of Hindi: ");
    scanf("%d", &hindi);


    if (english >= 40 && english <= 100 &&
        maths   >= 40 && maths   <= 100 &&
        hindi   >= 40 && hindi   <= 100) {

        total = english + maths + hindi;
        per = (total * 100.0) / 300.0;

        printf("\nYour total marks are: %d\n", total);
        printf("Your percentage is: %.2f\n", per);


        if (per >= 90) {
            printf("You got A grade\n");
        } else if (per >= 80) {
            printf("You got B grade\n");
        } else if (per >= 70) {
            printf("You got C grade\n");
        } else if (per >= 60) {
            printf("You got D grade\n");
        } else {
            printf("You got Failed\n");
        }
    } else {
        printf("Invalid marks entered (must be between 40 and 100)\n");
    }


}


