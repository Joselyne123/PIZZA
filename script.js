$(document).ready(function(){

    //business logic
    $("#summary").hide();
    $("#porto4").hide();
    $("#porto5").hide();
    $("#porto6").hide();
    function Pizza(crust,topping,size,cost){
      this.pizzaCrust=crust;
      this.pizzaTopping=topping;
      this.pizzaSize=size;
    }
    Pizza.prototype.yourPizza=function(){
      return "You ordered a "+this.pizzaSize+" pizza, with "+this.pizzaCrust+" crust"+" and "+this.pizzaTopping+" for topping."
    }
    function PizzaCost(crustCost,toppingCost,sizeCost){
      this.CostPerCrust=crustCost;
      this.CostPerTopping=toppingCost;
      this.CostPerSize=sizeCost;
    }
    PizzaCost.prototype.CostOfOne=function(){
      return this.CostPerCrust+this.CostPerTopping+this.CostPerSize
    }
    //user interface logic
    $("#cost").click(function(event){
        event.preventDefault();
          var selectedCrust= $("#crust").val();
          var selectedTopping= $("#topping").val();
          var selectedSize= $("#size").val();
          var numberOfPizza=$("#quantity").val();
        
        switch(selectedCrust){
          case"Flat Bread":
          var costOfCrust=300;
          break;
          case"Cracker":
          var costOfCrust=250;
          break;
          case"Greek":
          var costOfCrust=300;
          break;
          case"Focaccia":
          var costOfCrust=350;
          break;
          case"Thin":
          var costOfCrust=250;
          break;
        }

        switch(selectedTopping){
            case"Beef":
            var costOfTopping=400;
            break;
            case"Sausage":
            var costOfTopping=450;
            break;
            case"Ham":
            var costOfTopping=450;
            break;
            case"Chicken":
            var costOfTopping=500;
            break;
            case"Onions":
            var costOfTopping=350;
            break;
          }
          switch(selectedSize){
            case"Small":
            var costOfSize=700;
            break;
            case"Medium":
            var costOfSize=1000;
            break;
            case"Large":
            var costOfSize=1200;
            break;
          }
            