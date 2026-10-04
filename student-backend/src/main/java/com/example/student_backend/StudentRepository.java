package com.example.student_backend;
import org.springframework.data.jpa.repository.JpaRepository;
public interface StudentRepository extends JpaRepository<Student,Integer>{
    
}