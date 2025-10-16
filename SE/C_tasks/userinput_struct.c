#include<stdio.h>
#include<string.h>
struct employee {
    int eid;
 char name[20];
    float salary;


};

void main(){
    char name[20];
struct employee e[3];

    for(int i =0; i<3; i++)
    {
         printf("enter number the id");

        scanf("%d",&e[i].eid);
        printf("enter the employee name\n");
        scanf("%s",&e[i].name);
    }
 printf("the all employee id are\n");
    for(int i=0; i<3; i++)
    {
        printf("%d \n",e[i].eid);
        printf("%s",e[i].name);

    }







}


