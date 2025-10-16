#include <stdio.h>

int main() {
    int a[2][3];  // 2 rows, 3 columns

    // Input elements
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("Enter element for row %d column %d: ", i+1, j+1);
            scanf("%d", &a[i][j]);
        }
    }

    // Print elements
    printf("\nThe matrix is:\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", a[i][j]);
        }
        printf("\n");
    }

    return 0;
}
