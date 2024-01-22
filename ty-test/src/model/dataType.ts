// data.map에서 {obj:{}} 형태니까 {obj}로 한꺼풀 벗겨주는 것임!
// {obj:{ id: 0, name: '홍길동', date: '2024-01-22' }}

export type initTy = {
    [a: string]: string | number | undefined;
    // id: number,
    // name: string | undefined,
    // date: string
}