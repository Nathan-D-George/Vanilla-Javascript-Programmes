function tribonacci(signature,n){
  if (n == 0){ return []};
  if (n == 1){ return [signature[0]]};
  if (n == 2){ return [signature[0], signature[1] ]};
  if (n == 3){ return signature };
  let ans = signature;
  for (let i = 2; i < n-1; i++) { ans.push( (ans[i-2] + ans[i-1] + ans[i] ) ); }
  return ans;
}

