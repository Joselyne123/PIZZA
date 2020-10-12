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
    