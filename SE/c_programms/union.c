#include<stdio.h>
#include<string.h>
struct employee {

    int eid;
    char name[20];
    float salary;
};

void main(){
struct employee e[5];
e[0].eid=101;
printf("emp id%d\n",e[0].eid);
strcpy(e[0].name,"prashnat");
printf("emp name %s\n",e[0].name);
e[0].salary=10000000;
printf("emp salary %f\n",e[0].salary);





e[1].eid=102;
printf("emp id%d\n",e[1].eid);
strcpy(e[1].name,"aayushii");
printf("emp name %s\n",e[1].name);
e[1].salary=10000000;
printf("emp salary %f\n",e[1].salary);






}


