/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var i = l1, j = l2;
  var res = new ListNode(-1);
  curr = res;
  while(i && j && i.val !== undefined && j.val !== undefined){
      if(i.val < j.val){
          curr.next = i;
          i = i.next;
      }else{
          curr.next = j;
          j = j.next;
      }
      curr = curr.next;     
  }
  if(i && i.val !== undefined){
      curr.next = i;
  }
  if(j && j.val !== undefined){
      curr.next = j;
  }
  return res.next || [];
};