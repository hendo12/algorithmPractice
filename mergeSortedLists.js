var mergeTwoLists = function(l1, l2) {
    let sortedList = new ListNode();
    let dummy = sortedList;
    console.log('l1 val: ', l1.val);
    console.log('l1 next: ', l1.val);
    
    while(l1&&l2) {
        if(l1.val < l2.val) {
            sortedList.next = l1;
            l1 = l1.next;
        } else {
            sortedList.next = l2;
            l2 = l2.next;
        }
        sortedList = sortedList.next;
    }
    
    if(l1) {
        sortedList.next = l1;
    }
    
    if(l2) {
        sortedList.next = l2;
    }
    
    
    return dummy.next;
};