//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface itCourse {
    courseName: string;
    location: string;
    onSiteStudent: number;
}

let itCourse = {
    courseName : "Typescript and Javascript",
    location : "Governor House Sindh",
    onSiteStudent : "50,000",
};

console.log(itCourse);
