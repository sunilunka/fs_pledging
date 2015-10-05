function Deferral(){
  this.$promise = new $Promise();
}

function $Promise(){
  this.state = "pending";
  this.value = undefined;

}

function defer(){
  return new Deferral();
}

Deferral.prototype.resolve = function(data){
  if(this.$promise.state === "pending"){
    this.$promise.value = data;
    this.$promise.state =  "resolved";
  }
}

Deferral.prototype.reject = function(reason){
  if(this.$promise.state === "pending"){
    this.$promise.value = reason;
    this.$promise.state = "rejected";
  }
}

