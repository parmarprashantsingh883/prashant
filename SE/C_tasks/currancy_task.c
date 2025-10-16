#include <stdio.h>

int main() {
    int amount;
    int currency[] = {2000, 500, 200, 100, 50, 20, 10, 5, 2, 1};

    printf("Enter the amount: ");
    scanf("%d", &amount);

    printf("Currency distribution:\n");

    for (int i = 0; i < 10; i++) {
        if (amount >= currency[i]) {
            int note_count = amount / currency[i];
            printf("%d =%d\n", note_count, currency[i]);
            amount = amount % currency[i];
        }
        else{
             int note_count = amount / currency[1];
            printf("%d ==%d\n", note_count, currency[i]);
            amount = amount % currency[i];

        }
    }

    return 0;
}
