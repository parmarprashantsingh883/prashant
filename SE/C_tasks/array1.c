#include <stdio.h>

  void add( int a[]){
      int sum=0;

  for(int i=0;i<5;i++){
    sum=sum+a[i];
  }
 printf("\nThe sum of array elements is %d\n", sum);
  }
int main() {
    int a[5];

    printf("Enter 5 numbers: ");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &a[i]);   // take input for each element
    }

    printf("You entered: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", a[i]);  // print each element
    }


 add(a);
  }


