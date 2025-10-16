#include<stdio.h>
int main()
{
    int PIN;
    int current_balance =20000;
    int options;
    int another_options;



    printf("please enter your PIN");
    scanf("%d",&PIN);
do{

    if(PIN==10007)
    {
        printf(" 1 check your balance \n");
        printf(" 2 deposit your money\n");
        printf(" 3 withdrowe the money\n");
        scanf("%d",&options);
    }
    switch(options)
    {

    case 1:
        printf("%d your balance is\n",current_balance);
        break;

    case 2:
    {
        printf("adding the money to account\n");

        int ammount;
        scanf("%d",&ammount);
         current_balance= current_balance+ammount;

        printf("%d your current balance is ",current_balance

              );
    }
    break;
    case 3:
    {

        printf("enter the ammount\n");
        int ammount;
        scanf("%d",&ammount);
         current_balance=current_balance-ammount;
        printf("%d your current balance is\n\n ",current_balance);

    }

    }

 printf("enetr 4 to conatinue");
 scanf("%d",&another_options);




    }while(another_options==4);

}

