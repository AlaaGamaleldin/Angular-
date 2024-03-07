import { Student } from "../Models/Student";

export class StudentService{
    students: Student[] = [
        new Student(1, 'John Smith', 'Male', new Date('11-12-1997'), 'MBA', 520, 1899),
        new Student(2, 'Mark Vought', 'Male', new Date('10-06-1998'), 'B.Tech', 420, 2899),
        new Student(3, 'Sarah King', 'Female', new Date('09-22-1996'), 'B.Tech', 540, 2899),
        new Student(4, 'Merry Jane', 'Female', new Date('06-12-1995'), 'MBA', 380, 1899),
        new Student(5, 'Steve Smith', 'Male', new Date('12-21-1999'), 'M.Sc', 430, 799),
        new Student(6, 'Jonas Weber', 'Male', new Date('06-18-1997'), 'M.Sc', 320, 799),
    ];

    totalMarks: number = 600;

    CreateStudent(name, gender, dob, course, marks, fee){
        let id = this.students.length + 1;
        let student = new Student(id, name, gender, dob, course, marks, fee);
        this.students.push(student);

        // the next block of code to test impuer change to student service

        // let studentCopy = [...this.students];
        // studentCopy.push(student);
        // this.students = studentCopy;
    }

//     Check if filterBy is 'all', an empty string, or if the list of students is empty. If any of these conditions are true, return the original list of students.
// If the conditions in step 1 are not met, filter the list of students based on the gender specified by the filterBy parameter.
// Return the filtered list of students.
    FilterByGender(filterBy: string){
        if(
            filterBy.toLowerCase() === 'all' || filterBy === '' || this.students.length === 0){
                return this.students;
    }else{
        return this.students.filter((std) => {
            return std.gender.toLowerCase() === filterBy.toLowerCase();
        })
    }

}
}