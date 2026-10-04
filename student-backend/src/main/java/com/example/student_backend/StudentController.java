package com.example.student_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController 
@CrossOrigin (origins = "*")
public class StudentController {
    @Autowired 
    private StudentRepository repository;
    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student){
        
        
        return repository.save(student);
    }
    
}
