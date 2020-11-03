
###### Pseudo Code

maxValue(){
  let maxValue = this.root.value;
  function _maxValue(root){
    if(!root){return}
    if(root.value > maxValue) {maxValue = root}
    if(root.left){_maxValue(root.left)}
    if(root.right){_maxValue(root.right)}
  }
  _maxValue(this.root)
  return maxValue
}

![diagram](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-16/binary-tree.png)