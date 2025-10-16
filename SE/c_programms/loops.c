#include<stdio.h>
void main()
{


    int a;
    printf("enter the numer:");
    scanf("%d",&a);

    for( int i=1; i<=10; i++)
    {

        int total=a*i;

        printf("%d $ %d = %d\n",a,i,total);
    }

}

