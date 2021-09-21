export interface IDepartment {
    dept_record: any;
    deptId: number;
    deptName: string;
    deptTeacherDetails: {
        teacherName: string;
        qualification: string;
        designation: string;
        yearsOfExp: number;
    }
    
}    