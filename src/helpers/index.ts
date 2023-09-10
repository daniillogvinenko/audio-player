export const secondsToTime = (seconds: number | undefined):string => {

    if(seconds === undefined) return '0:0';

    let minutesRes:number = Math.floor(seconds / 60);
    
    let secondsRes:number = Math.floor(seconds % 60);

    let res:string = '';

    if(secondsRes.toString().length === 1)
    {
        res = '0' + secondsRes.toString();
    } else {
        res = (secondsRes).toString();
    }

    return minutesRes + ':' + res;
}