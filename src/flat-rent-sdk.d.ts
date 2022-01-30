declare module 'flat-rent-sdk' {
    export interface Parameters {
        city: string,
        checkInDate: Date,
        checkOutDate: Date,
        priceLimit: number
    }
    export function cloneDate(date: Date): Date;
    export function addDays(date: Date, days: number): Date;
    export function get(id: string): Promise<Object | null>
    export function search(parameters: Parameters): Object[]
    export function book(flatId: number, checkInDate: Date, checkOutDate: Date): number
    export function _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void
    export function _resetTime(date: Date): void;
    export function _calculateDifferenceInDays(startDate: Date, endDate: Date): number;
    export function _generateDateRange(from: Date, to: Date): Date[];
    export function _generateTransactionId(): number;
    export function _areAllDatesAvailable(flat: Object, dateRange: Date[]): boolean[];
    export function _formatFlatObject(flat: Object, nightNumber: number): Object;
    export function _readDatabase(): string;
    export function _writeDatabase(database: Object): void;
    export function _syncDatabase(database: Object): void;
}