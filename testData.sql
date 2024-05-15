INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES
('d764b48b-3bfa-437b-9b0b-a7f45c1b9b61', 'c19ad543-7ad9-4c1f-86ae-35e3a54e9e1f', '2023-10-01', '2023-10-05', 'OPEN'),
('f9c11585-d47b-4644-a399-d08a5b2dfa91', '55a538c3-f39f-4091-82a1-49f9b6c9f3b9', '2023-10-02', '2023-10-06', 'ORDERED'),
('86ff50d3-212f-4ece-b074-5de8df7c9e47', '72927c4b-c09d-4638-b11b-5d7a53edbc88', '2023-10-03', '2023-10-07', 'OPEN'),
('a4f8b955-6ab9-4c2c-9789-1a3eec286b15', '2dcb56bc-ffc1-4ed6-85b5-84a5a8feabdc', '2023-10-04', '2023-10-08', 'ORDERED'),
('9b7d4a8b-3b78-4dce-8500-43d5f0b9a4d4', 'e2f8422e-312d-4d2e-91f8-9987dae28797', '2023-10-05', '2023-10-09', 'OPEN');


INSERT INTO cart_items (cart_id, product_id, count) VALUES
('d764b48b-3bfa-437b-9b0b-a7f45c1b9b61', '1572d9da-775b-4e56-9659-6fa72ab033b6', 2),
('d764b48b-3bfa-437b-9b0b-a7f45c1b9b61', 'c962af0b-2ebe-4467-8b0a-0199f3eecfcc', 1),
('d764b48b-3bfa-437b-9b0b-a7f45c1b9b61', '97aa531f-bad3-4964-88ab-4c87eeaf0762', 3),
('d764b48b-3bfa-437b-9b0b-a7f45c1b9b61', '0dc6b765-3b01-477f-965a-b087759681e8', 1),
('d764b48b-3bfa-437b-9b0b-a7f45c1b9b61', 'c6bef872-4356-4f9f-933d-6d325aa168a8', 4),
('f9c11585-d47b-4644-a399-d08a5b2dfa91', '1572d9da-775b-4e56-9659-6fa72ab033b6', 1),
('f9c11585-d47b-4644-a399-d08a5b2dfa91', 'c962af0b-2ebe-4467-8b0a-0199f3eecfcc', 2),
('f9c11585-d47b-4644-a399-d08a5b2dfa91', '97aa531f-bad3-4964-88ab-4c87eeaf0762', 1),
('f9c11585-d47b-4644-a399-d08a5b2dfa91', '0dc6b765-3b01-477f-965a-b087759681e8', 3),
('f9c11585-d47b-4644-a399-d08a5b2dfa91', 'c6bef872-4356-4f9f-933d-6d325aa168a8', 2);
