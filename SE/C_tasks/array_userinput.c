#include<stdio.h>
void disp();
void even();
int main()
{
    int a[5];
    for(int i=0; i<5; i++)
    {
        printf("enter number %d : ",i);
        scanf("%d",&a[i]);
    }
    disp(a);
    even(a);
}
void disp(int x[])
{
    printf("values\n");
    for(int i=0; i<5; i++)
    {
        printf("%d\n",x[i]);

    }
}
void even(int y[])
{
    printf("Even values\n");
    for(int i=0; i<5; i++)
    {
        if(i%2!=0){
            printf("%d\n",y[i]);
        }
}
}

