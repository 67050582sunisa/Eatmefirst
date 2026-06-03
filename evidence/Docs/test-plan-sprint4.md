# 🧪 Sprint 4 Test Plan — Team 07 Eatmefirst
**ผู้รับผิดชอบหลัก:** ภาวิช ส.กาญจนะชัย (API / Backend)

## 1. Objective & Scope
- เพื่อทดสอบเสถียรภาพ ความถูกต้องของข้อมูล และประสิทธิภาพการประมวลผลระบบหลังบ้าน (Backend API) ก่อนนำ Prototype v1 ไปใช้จริงกับกลุ่มผู้ใช้เป้าหมาย

## 2. Target Audience
- กลุ่มผู้ใช้งานทั่วไปที่ต้องการทดลองสั่งอาหารล่วงหน้าจำนวน 3-5 คน

## 3. Backend Integration & API Test Scenarios
- **Test Case 1:** ตรวจสอบการดึงข้อมูลเมนูอาหารผ่าน HTTP GET Method (API Response Status: 200 OK)
- **Test Case 2:** ตรวจสอบความถูกต้องในการบันทึกข้อมูลและสถานะคำสั่งซื้อเมื่อมีการกด Order ลงใน Database (Data Integrity Check)
- **Test Case 3:** ทดสอบการรองรับ Request พร้อมๆ กันเพื่อจำลองสถานการณ์ที่มีผู้ใช้สั่งอาหารเวลาเดียวกัน (Concurrency & Response Time)
