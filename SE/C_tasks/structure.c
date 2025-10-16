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
strcpy(e[0].name,"prashnat");
e[0].salary=10000000;

printf("emp id%d\n",e[0].eid);
printf("emp name %s\n",e[0].name);
printf("emp salary %f\n",e[0].salary);

e[1].eid=102;
strcpy(e[1].name,"aayushii");
e[1].salary=10000000;

printf("emp id%d\n",e[1].eid);
printf("emp name %s\n",e[1].name);
printf("emp salary %f\n",e[1].salary);


}


