#include<stdio.h>
void main(){
    int a;
    int b;

    printf("Enter two numbers: ");

    scanf("%d",&a);
    scanf("%d",&b);

     printf("value of a before swapping%d\n",a);
     printf("value of a before swapping%d\n",b);

        a=a+b;
        b=a-b;
        a=a-b;

     printf("value of a after swapping%d\n",a);
     printf("value of a after swapping%d\n",b);


}

