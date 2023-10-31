/**
 Question A
 Your goal for this question is to write a program that accepts two lines (x1,x2) and (x3,x4) on the
 x-axis and returns whether they overlap. As an example, (1,5) and (2,6) overlaps but not (1,5)
 and (6,8).
*/

class LineOverlap {
    isLineOverlap(x1: number, x2: number, x3: number, x4: number): boolean {
        return x1 <= x4 && x2 >= x3;
    }
}

const line1 = new LineOverlap;
console.log('Question A - Should return true: ', line1.isLineOverlap(1, 5, 2, 6));
console.log('Question A- Should return false: ', line1.isLineOverlap(1, 5, 6, 8));




/**
 Question B
 The goal of this question is to write a software library that accepts 2 version string as input and
 returns whether one is greater than, equal, or less than the other. As an example: “1.2” is
 greater than “1.1”. Please provide all test cases you could think of.
 */

class VersionComparer {
    compare(version1: string, version2: string): string {
        const v1 = version1.split('.').map(Number);
        const v2 = version2.split('.').map(Number);

        const maxLength = Math.max(v1.length, v2.length);

        for (let i = 0; i < maxLength; i++) {
            const num1 = i < v1.length ? v1[i] : 0;
            const num2 = i < v2.length ? v2[i] : 0;

            if (num1 > num2) {
                return "greater than";
            } else if (num1 < num2) {
                return "less than";
            }
        }

        return "equal to";
    }
}

// Example usage:
const versionComparer = new VersionComparer();
console.log('Question B - Should return "greater than": ', versionComparer.compare("1.2", "1.1"));
console.log('Question B - Should return "greater than": ', versionComparer.compare("2.0.1", "2"));
console.log('Question B - Should return "equal to": ', versionComparer.compare("1.0", "1.0.0"));
console.log('Question B - Should return "equal to": ', versionComparer.compare("2.5", "2.5"));
console.log('Question B - Should return "less than": ', versionComparer.compare("3", "4"));


/**
 ## Question C
 At Ormuco, we want to optimize every bits of software we write. Your goal is to write a new
 library that can be integrated to the Ormuco stack. Dealing with network issues everyday,
 latency is our biggest problem. Thus, your challenge is to write a new Geo Distributed LRU (Least
 Recently Used) cache with time expiration. This library will be used extensively by many of our
 services so it needs to meet the following criteria:
 1) Simplicity. Integration needs to be dead simple.
 2) Resilient to network failures or crashes.
 3) Near real time replication of data across Geolocation. Writes need to be in real time.
 4) Data consistency across regions
 5) Locality of reference, data should almost always be available from the closest region
 6) Flexible Schema
 7) Cache can expire
 As a hint, we are not looking for quantity, but rather quality, maintainability, scalability,
 testability and a code that you can be proud of.
 */

console.log('Question C: this question is for Back-End developers not for Front-End!');
